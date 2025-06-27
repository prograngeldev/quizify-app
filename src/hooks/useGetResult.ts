import useQuizStore from "../store/quize-store";

const calculateAccuracy = (correctAnswers: number, totalAnswers: number) => {
  if (totalAnswers === 0) return 0;
  return Math.floor(((correctAnswers / totalAnswers) * 100));
};

const useGetResult = () => {
  const { userAnswers, quizData } = useQuizStore();

  const correctAnswers = userAnswers.filter(a => a.answer && a.isCorrect);
  const totalCorrectAnswers = correctAnswers.length;
  const totalIncorrectAnswers = userAnswers.length - totalCorrectAnswers;
  const totalQuestions = userAnswers.length;

  const accuracy = calculateAccuracy(totalCorrectAnswers, userAnswers.length);
  const passed = totalCorrectAnswers >= quizData.passScore;

  return {correctAnswers, totalCorrectAnswers, totalIncorrectAnswers, totalQuestions, accuracy, passed};
}

export default useGetResult;