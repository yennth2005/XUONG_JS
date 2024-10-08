export const getAllQuiz = async ()=>{
    try {
        // call api lấy ds quiz
        const res = await fetch('http://localhost:3000/quizs'); // call api:bất đồng bộ
        const data = await res.json()
        // console.log(data); // đồng bộ
        return data;
    } catch (error) {
        alert("error")
    }
}

export const getQuestionByIdQuiz = async(idQuiz)=>{
    try {
        // call api lấy ds question(câu hỏi theo id của quiz)
        const res = await fetch(`http://localhost:3000/questions?quizId=${idQuiz}`); // call api:bất đồng bộ
        const data = await res.json()
        // console.log(data); // đồng bộ
        return data;
    } catch (error) {
        alert("error")
    }
}