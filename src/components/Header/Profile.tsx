import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile<ProfileProps>({ showProfileData }) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Luiz Magno</Text>
                    <Text
                        color="gray.300"
                        fontSize="small"
                    >
                        luiz.magno7@yahoo.com.br
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Luiz Magno" />
        </Flex>
    );
}