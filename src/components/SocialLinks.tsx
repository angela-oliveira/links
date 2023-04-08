import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";
import DynamicIcon from "./DynamicIcon";
import SocialLinksProps from "@/interfaces/social-links";

type SocialProps = {
    data: SocialLinksProps
}
export function SocialLinks({data}: SocialProps) {
    return (
        <Flex 
            align={'center'} 
            justifyContent={'center'} 
            opacity={'60%'}
            transition={'all'}
            color={'primary.10'}
            _hover={{
                opacity: '100%',
                translateY: '0.12rem',
                mt: -2
            }}
        >
            <Link href={data.link} isExternal>
                <Flex h='32px' w='32px' alignItems="center">
                    <DynamicIcon icon={data.icon} />
                </Flex>
            </Link>
        </Flex>
    )
}