import React, { ReactText } from "react";
import { IconType } from "react-icons";
import { Link, Icon, Flex, FlexProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavItemProps extends FlexProps {
  // icon: IconType;
  children: ReactText;
}
const NavItem = (props: NavItemProps) => {
  const { children, ...rest } = props;
  return (
    <NextLink href={children.toString()} passHref>
      <Link style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {/* {icon && (
          <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
          />
        )} */}
          {children}
        </Flex>
      </Link>
    </NextLink>
  );
};
export default NavItem;
