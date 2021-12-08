import { useContext } from "react"
import { Stack, Box, Typography, Avatar } from "@mui/material"
import { SystemStyleObject, Theme } from "@mui/system"

import Navigation from "components/scaffold/Navigation"
import { ThemeSelectionContext } from "components/scaffold/ThemeSelectionProvider"

import { InsetStack } from "components/common/Inset"
import Socials from "components/common/Socials"
import DarkModeToggle from "components/common/DarkModeToggle"

export type DrawerContentProps = {
  sx?: SystemStyleObject<Theme>
}

export const DrawerContent = ({ sx }: DrawerContentProps) => {
  const { themeSelection } = useContext(ThemeSelectionContext)
  return (
    <Stack sx={sx} height={1} spacing={2}>
      <InsetStack
        variant="vertical"
        direction="column"
        p={2}
        mt={8}
        spacing={2}
        alignItems="center"
        sx={{ backgroundColor: "background.paper" }}
      >
        <Box
          sx={{
            height: ({ spacing }) => spacing(4),
            position: "relative",
            marginBottom: 1,
          }}
        >
          <Avatar
            src="/images/profile-pic.png"
            alt="isaiah's profile picture"
            sx={{
              backgroundColor: "grey.400",
              height: ({ spacing }) => spacing(12),
              width: ({ spacing }) => spacing(12),
              boxShadow: 3,
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "TranslateX(-50%)",
            }}
          />
        </Box>

        <Typography fontWeight={900} variant="h6" align="center">
          Isaiah Smith
        </Typography>
        <Socials />
      </InsetStack>

      <Navigation sx={{ px: 2 }} />

      <InsetStack
        sx={{ backgroundColor: "background.paper" }}
        variant="vertical"
        direction="row"
        alignItems="center"
        justifyContent="center"
        py={1}
        spacing={1}
      >
        <Typography>
          Lights {themeSelection === "light" ? "Out" : "On"}?
        </Typography>
        <DarkModeToggle />
      </InsetStack>
    </Stack>
  )
}

export default DrawerContent
