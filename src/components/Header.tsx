import React from "react";
import { DATA } from "@/pages/lib/data";
import { theme } from "@/styles/theme";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  const { user } = DATA
    return (
        <Flex 
            // position={'relative'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            flexDir={'column'}
        >
            <Flex
                h='130px'
                bgColor={'primary.10'}
                w='100%'
            >

            </Flex>
            <Flex 
                // position={'relative'}
                pb={4}
                mt='-75px'
                maxW={'lg'}
                textAlign={'center'}
                alignItems={'center'}
                flexDir={'column'}
            >
                <Image 
                    src="https://raw.githubusercontent.com/angela-oliveira/avatar/main/img-4086.webp" 
                    width={150}
                    height={150}
                    objectFit={'cover'}
                    borderRadius={'50%'}
                    border={'solid 5px white'}
                />
                <Heading 
                    fontFamily={theme.fonts.title} 
                    fontSize={18}
                    color={'primary.10'}
                    mt={4}
                >{user.fullname}</Heading>
                <Text 
                    mt={1} 
                    fontSize={'sm'}
                    opacity={'80%'}
                    fontWeight={'semibold'}
                    color={'primary.10'}
                >{user.role}</Text>
                <Flex mt={4} gap={4}>
                    {user.socialLinks && user.socialLinks.map((e, i) => <SocialLinks key={i} data={e} />)}
                </Flex>
            </Flex> 
        </Flex>
    )
}0