import { Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import QuizCard from "../components/QuizCard";
import useQuizStore from "../store/quize-store";
import { useState } from "react";
import { useNavigate } from "react-router";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { quizData, userAnswers, setUserAnswer } = useQuizStore();
  const navigate = useNavigate();

  const currentQuiz = quizData.quizzes[currentQuestionIndex];
  
  console.log(userAnswers);

  const handleAnswer = (answer: string) => {
    if (userAnswers[currentQuestionIndex]?.answer === answer) return;

    const updatedAnswer = [...userAnswers];
    updatedAnswer[currentQuestionIndex] = {
      question: currentQuiz.question,
      answer,
      isCorrect: answer === currentQuiz.answer,
      correctAnswer: currentQuiz.answer,
    };

    setUserAnswer(updatedAnswer);
  };

  return (
    <QuizContainer>
      <Text fz={"2rem"} fw={"bold"} ta={"center"}>
        {quizData.title}
      </Text>
      <Text fz={"1.5rem"} ta={"center"}>
        {currentQuestionIndex + 1} / {quizData.quizzes.length}
      </Text>
      <QuizCard
        onAnswer={(answer) => handleAnswer(answer)}
        onNext={() => {
          if (currentQuestionIndex < quizData.quizzes.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          } else {
          navigate("/quiz-result");
          }
        }}
        isLastQuestion={currentQuestionIndex === quizData.quizzes.length - 1}
        options={currentQuiz.options}
        question={currentQuiz.question}
      />
    </QuizContainer>
  );
};

export default QuizPage;
