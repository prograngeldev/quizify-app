import { Center, Text } from "@mantine/core"
import QuizContainer from "../components/QuizContainer"

const PageNotFound = () => {
  return (
    <QuizContainer minHeight="100px">
      <Center>
        <Text
          fz={{ base: "2rem", md: "3rem", lg: "2rem" }}
          fw={"bold"}
          variant="gradient"
          gradient={{ from: "red", to: "deeppink", deg: 45 }}
        >
          404 Page Not Found
        </Text>
      </Center>
    </QuizContainer>
  )
}

export default PageNotFound