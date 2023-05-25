import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface NavSectionProps {
    title: string;
    children: React.ReactNode;
}

export function NavSection<NavSectionProps>({ title, children }) {
    return (
        <Box>
            <Text
                fontWeight="bold"
                color="gray.400"
                fontSize="small"
            >
                {title}
            </Text>

            <Stack spacing="4" mt="8" align="stretch">
                { children }
            </Stack>
        </Box>
    );
}