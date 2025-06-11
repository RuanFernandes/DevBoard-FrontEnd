import { Box, Flex, Text, Avatar, Spacer, Menu } from '@chakra-ui/react';
import { colors } from '@/theme';
import { useAuthStore } from '@/api/auth/auth';

const Navbar = () => {
    const user = useAuthStore((s) => s.user);
    const logout = useAuthStore((s) => s.logout);

    return (
        <Box
            as="nav"
            w="100%"
            px={8}
            py={4}
            bg={colors.card}
            boxShadow="0 2px 8px rgba(0,0,0,0.15)"
        >
            <Flex align="center">
                <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    color={colors.primary}
                    letterSpacing="widest"
                    userSelect="none"
                >
                    Dev Board
                </Text>
                <Spacer />
                {user && (
                    <Menu.Root>
                        <Menu.Trigger>
                            <Avatar.Root>
                                <Avatar.Fallback name={user.username} />
                                <Avatar.Image src={user.avatarUrl} />
                            </Avatar.Root>
                        </Menu.Trigger>
                        <Menu.Positioner>
                            <Menu.Content
                                bg={colors.card}
                                borderColor={colors.primary}
                            >
                                <Menu.Item
                                    value="logout"
                                    bg={colors.card}
                                    color={colors.text}
                                    _hover={{
                                        bg: colors.primary,
                                        color: 'white',
                                    }}
                                    onClick={logout}
                                >
                                    Sair
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Menu.Root>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;
