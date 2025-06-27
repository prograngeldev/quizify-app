import { Box, Button, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import useQuizStore from "../store/quize-store";
import { useNavigate } from "react-router";
import useGetResult from "../hooks/useGetResult";

const QuizResults = () => {
  const { userName, resetAll } = useQuizStore();
  const { accuracy, totalCorrectAnswers, totalQuestions, passed } = useGetResult();
  const navigate = useNavigate();

  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        gradient={{ from: "red", to: "deeppink" }}
        fw={700}
        fz={24}
      >
        Quiz Results for {userName}
      </Text>
      <Text fw={500} fz={16}>
        {passed ? "✅ You passed the quiz!" : "❌ You did not pass the quiz."}
      </Text>

      <Box>
        <Text fw={500} fz={16}>
          {passed 
            ? `✅ You scored ${accuracy}%!`
            : `❌ You scored ${accuracy}%.`}
        </Text>
        <Text fw={500} fz={16}>
          {passed
            ? `✅ You passed the quiz with a score of ${accuracy}%`
            : `❌ You failed the quiz with a score of ${accuracy}%`}
        </Text>{" "}
        <Text fw={500} fz={16}>
          {passed
            ? `✅ You answered ${totalCorrectAnswers} out of ${totalQuestions} questions correctly.`
            : `❌ You answered ${totalCorrectAnswers} out of ${totalQuestions} questions correctly.`}
        </Text>
      </Box>
      <Button
        variant="gradient"  
        miw={"200px"}
        onClick={() => {
          resetAll();
          navigate("/");
        }}
        size="md"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Try Again
      </Button>
    </QuizContainer>
  );
};

export default QuizResults;
