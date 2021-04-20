
//const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const QUIZZES_URL = 'https://wbdv-sp21-02-dc-server-node.herokuapp.com/api/quizzes';

export const findAllQuizzes = () => {
   return fetch(QUIZZES_URL)
      .then(response => response.json())
}
export const findQuizById = (qid) => {
   return fetch(`${QUIZZES_URL}/${qid}`)
      .then(response => response.json())
}

export const submitQuiz = (quizId, questions) => {
   return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
     method: 'POST',
     body: JSON.stringify(questions),
     headers: {
       'content-type': 'application/json'
     }
   }).then(response => response.json())
     
  }

  export const getQuizAttemptsForQuiz = (quizId) => {
   return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
      .then(response => response.json())
}
  

export default {
   findAllQuizzes, findQuizById, submitQuiz, getQuizAttemptsForQuiz
}
