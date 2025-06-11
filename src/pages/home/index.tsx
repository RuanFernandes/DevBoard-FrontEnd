import ParticlesObject from '@/components/particles/home_particles';
import { toaster } from '@/components/ui/toaster';
import { colors } from '@/theme';
import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.reason === 'notlogged') {
            toaster.error({
                title: 'Você precisa estar logado',
                description: 'Faça login para acessar o Dev Board.',
                duration: 5000,
            });
            location.state.reason = undefined;
            navigate(location.pathname, { replace: true });
        }
    }, [location, navigate]);

    return (
        <Box
            position="relative"
            minH="100vh"
            overflow="hidden"
            bg={colors.background}
        >
            <ParticlesObject />
            <Center minH="100vh" position="relative" zIndex={2}>
                <VStack gap={10}>
                    <Box px={8} py={4}>
                        <Heading
                            as="h1"
                            fontSize={['3xl', '5xl', '7xl']}
                            color="white"
                            textShadow="0 8px 32px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.3)"
                            letterSpacing="widest"
                            fontWeight="extrabold"
                            transition="all 0.3s"
                            _hover={{
                                transform: 'scale(1.06) rotate(-2deg)',
                                filter: 'drop-shadow(0 0 48px #fff)',
                            }}
                            userSelect={'none'}
                        >
                            Dev Board
                        </Heading>
                    </Box>
                    <Button
                        colorScheme="whiteAlpha"
                        size="lg"
                        px={10}
                        py={6}
                        fontSize="xl"
                        textShadow={'0 2px 4px rgba(0,0,0,0.5)'}
                        onClick={() => navigate('/login')}
                        bg={colors.primary}
                        color={colors.text}
                        _hover={{
                            bg: colors.secondary,
                            transform: 'scale(1.05)',
                        }}
                        shadow="lg"
                        fontWeight="bold"
                    >
                        Join Now
                    </Button>
                </VStack>
            </Center>
        </Box>
    );
};

export default Home;
