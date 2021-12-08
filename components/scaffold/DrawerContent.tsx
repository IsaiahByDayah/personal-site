import React, { FC } from "react"
import { Stack, Box, Typography, Avatar } from "@mui/material"
import { SystemStyleObject, Theme } from "@mui/system"

// import NavigationButtons from "components/navigation/NavigationButtons"

import { InsetStack } from "components/common/Inset"
import Socials from "components/common/Socials"
import DarkModeToggle from "components/common/DarkModeToggle"

// const useStyles = makeStyles(({ spacing, shadows, palette }) => ({
//   content: {
//     display: "flex",
//     flexDirection: "column",
//     height: "100%",
//   },

//   inset: {
//     padding: spacing(2),
//     marginTop: spacing(8),
//   },
//   avatarContainer: {
//     height: spacing(4),
//     position: "relative",
//     marginBottom: spacing(),
//   },
//   avatar: {
//     backgroundColor: palette.grey[400],
//     height: spacing(12),
//     width: spacing(12),
//     boxShadow: shadows[3],
//     position: "absolute",
//     bottom: 0,
//     left: "50%",
//     transform: "TranslateX(-50%)",
//   },
//   title: {
//     fontWeight: 900,
//   },
//   socials: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: spacing(),
//     padding: spacing(0, 1),
//   },

//   buttons: {
//     padding: spacing(2),
//   },

//   toggleWrapper: {
//     display: "flex",
//     justifyContent: "flex-end",
//     padding: spacing(0.5, 2),
//   },
// }))

export type DrawerContentProps = {
  sx?: SystemStyleObject<Theme>
}

export const DrawerContent: FC<DrawerContentProps> = ({ sx }) => {
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

      {/* <NavigationButtons className={classes.buttons} onClick={onClick} /> */}

      <InsetStack
        sx={{ backgroundColor: "background.paper" }}
        variant="vertical"
        direction="row"
        justifyContent="center"
        p={1}
      >
        <DarkModeToggle />
      </InsetStack>
    </Stack>
  )
}

export default DrawerContent
