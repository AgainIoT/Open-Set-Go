import express from "express";

const app = express();

// GET 요청이 들어왔을 때
app.get("/", (req, res) => {
    res.send("Hello World!"); // 응답 보내기
});

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
}); // 3000번 포트에서 실행