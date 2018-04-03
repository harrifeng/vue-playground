package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type Member struct {
	MemberID  int64  `json:"member_id"`
	Telephone string `json:"telephone"`
}

type InputBody struct {
	MemberID int64 `json:"member_id"`
}

type OutputBody struct {
	Code    int      `json:"code"`
	Message string   `json:"message"`
	Data    []Member `json: "data"`
}

func MemberRelationHandler(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/json")

	output := OutputBody{0, "", []Member{}}

	switch r.Method {
	case "POST":
		w.WriteHeader(200)

		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()
		var t []InputBody
		err := decoder.Decode(&t)
		if err != nil {
			w.WriteHeader(400)
			output.Message = "Incorrect json format"
			json.NewEncoder(w).Encode(output)
			break
		}
		for _, one := range t {
			result := Member{one.MemberID, "telephone"}
			output.Data = append(output.Data, result)
		}

		json.NewEncoder(w).Encode(output)

	case "HEAD":
		w.WriteHeader(200)
		json.NewEncoder(w).Encode(output)
	default:
		w.WriteHeader(400)
		output.Message = "Unsupport HTTP Method"
		json.NewEncoder(w).Encode(output)
	}
}

func main() {

	fmt.Println()

	http.HandleFunc("/member_info", MemberRelationHandler)
	http.Handle("/", http.FileServer(http.Dir("public")))
	http.ListenAndServe("0.0.0.0:1234", nil)
	os.Exit(0)
}
