import React, { useContext } from "react"
import {
  alpha,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Stack,
  Link,
} from "@mui/material"
import { MenuRounded } from "@mui/icons-material"
import NextLink from "next/link"

// import { SideNavContext } from "providers/SideNavProvider"

import { onMobileSx, getOffMobileSx } from "components/common/OnMobile"
import Socials from "components/common/Socials"

export const Header = () => {
  return (
    <AppBar
      sx={{
        boxShadow: ({ spacing, palette }) =>
          `inset 0px -${spacing(0.5)} ${spacing(0.5)} -${spacing(0.5)} ${alpha(
            palette.common.black,
            0.25
          )}`,
      }}
      elevation={0}
      color="secondary"
    >
      <Stack
        component={Toolbar}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            sx={{
              boxShadow: 3,
              backgroundColor: "grey.400",
              height: ({ spacing }) => spacing(4),
              width: ({ spacing }) => spacing(4),
            }}
            src="/images/profile-pic.png"
            alt="avatar photo"
          />
          <NextLink href="/" passHref>
            <Link
              sx={{
                textDecoration: "none",

                "&:link": {
                  color: "secondary.contrastText",
                },

                "&:visited": {
                  color: "secondary.contrastText",
                },
              }}
              variant="h6"
              fontWeight={900}
            >
              Isaiah Smith
            </Link>
          </NextLink>
        </Stack>

        <IconButton
          sx={onMobileSx}
          edge="end"
          color="inherit"
          aria-label="menu"
          // onClick={onOpen}
        >
          <MenuRounded />
        </IconButton>

        <Socials sx={getOffMobileSx("flex")} />
      </Stack>
    </AppBar>
  )
}

export default Header
