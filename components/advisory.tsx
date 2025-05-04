"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";


interface CardProps {
    title: string,
    desc: string,
    extendedDesc: string,
}

export const AdvisoryCard = ({ title, desc, extendedDesc }: CardProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-400">{desc}
                <Link showAnchorIcon color="foreground" onPress={onOpen} className="pl-1.5 text-neutral-500">
                    More info
                </Link>
            </p>
            <Divider className='my-2'></Divider>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="font-sans">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                               <p>{extendedDesc}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
};

