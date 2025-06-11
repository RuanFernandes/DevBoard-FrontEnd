import { API_BASE_URL } from '@/api/ApiClient';
import { colors } from '@/theme';
import {
    Box,
    Button,
    Center,
    Heading,
    Text,
    VStack,
    Icon,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <Box
            minH="100vh"
            bgGradient="linear(to-br, #18181b 0%, #232136 100%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Center w="100%">
                <VStack
                    gap={8}
                    p={10}
                    borderRadius="2xl"
                    bg={colors.card}
                    boxShadow="0 8px 32px rgba(0,0,0,0.5)"
                >
                    <Heading
                        as="h1"
                        size="2xl"
                        color="white"
                        textAlign="center"
                        letterSpacing="widest"
                        fontWeight="extrabold"
                    >
                        Entrar no Dev Board
                    </Heading>
                    <Text color="gray.300" fontSize="lg" textAlign="center">
                        Faça login usando sua conta do GitHub para acessar o
                        painel de desenvolvedores.
                    </Text>
                    <Button
                        colorScheme="gray"
                        bg={colors.card}
                        color={colors.text}
                        size="lg"
                        px={8}
                        py={6}
                        fontWeight="bold"
                        fontSize="xl"
                        _hover={{
                            bg: colors.primary,
                            color: 'white',
                            transform: 'scale(1.05)',
                        }}
                        shadow="lg"
                        onClick={() =>
                            (window.location.href =
                                API_BASE_URL + 'auth/github')
                        }
                    >
                        <Icon as={FaGithub} mr={2} />
                        Entrar com GitHub
                    </Button>
                </VStack>
            </Center>
        </Box>
    );
};

export default LoginPage;
