import { Button, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import { useNavigate } from "react-router";
import useQuizStore from "../store/quize-store";

const QuizStartPage = () => {
  const { quizData } = useQuizStore();
  const navigate = useNavigate();

  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        fz={{ base: "2rem", md: "3rem", lg: "2rem" }}
        fw={"bold"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Quiz Start Page
      </Text>
      <Text fw={500} fz={16}>
        {quizData.title}
      </Text>
      <Text fw={500} fz={16}>
        {quizData.description}
      </Text>
      <Text fw={500} fz={16}>
        You should get {quizData.passScore} correct answers to pass the quiz.
      </Text>
      <Button
        onClick={() => navigate("/start-quiz")}
        variant="gradient"
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
        miw={"200px"}
        size="md"
        radius={"xl"}
        mt={"xl"}
      >
        Start Quiz
      </Button>
    </QuizContainer>
  );
};

export default QuizStartPage;
