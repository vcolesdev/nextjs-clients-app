import React from "react";
import CustomEditor from "@/components/Controls/CustomEditor";
import CustomButton from "@/components/Controls/Button/Custom";
import { Controller } from "react-hook-form";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";

export default function ModalClientComments({
  control,
  isOpen,
  modalHeadingText,
  modalType,
  onClose,
  onClick,
  size
}: {
  control?: any;
  isOpen: boolean;
  modalHeadingText?: string;
  modalType: "addComments" | "editComments" | "viewComments";
  onClick?: () => void;
  onClose: () => void;
  size?: "full" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={size ? size : "md"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className={"tracking-tight"}>
            {modalHeadingText ? modalHeadingText : "Client Comments"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={"mb-4"}>
              {modalType === "editComments" ? (
                <>
                  <p className={"text-sm text-gray-700 tracking-tight"}>
                    Edit comments about client using the textarea below.
                  </p>
                  {/* Comments */}
                  <div>
                    <Controller
                      control={control}
                      name={"comments"}
                      render={({ field }) => (
                        <CustomEditor
                          editorClasses={"p-4 text-sm text-gray-600"}
                          editorState={field.value}
                          onChange={field.onChange}
                          value={field.value}
                          wrapperClasses={"border border-gray-300"}
                        />
                      )}
                    />
                  </div>
                </>
              ) : modalType === "viewComments" ? (
                <p className={"text-sm text-gray-700 tracking-tight"}>
                  User input comments for this client:
                </p>
              ) : modalType === "addComments" ? (
                <>
                  <p className={"text-sm text-gray-700 tracking-tight"}>
                    Add client comments using the WYSIWYG editor below.
                  </p>
                  <Controller
                    control={control}
                    name={"comments"}
                    render={({ field }) => (
                      <CustomEditor
                        editorClasses={"p-4 text-sm text-gray-600"}
                        editorState={field.value}
                        onChange={field.onChange}
                        value={field.value}
                        wrapperClasses={"border border-gray-300"}
                      />
                    )}
                  />
                </>
              ) : (
                <div className={"text-sm text-gray-700 tracking-tight"}>
                  Modal content here...
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <CustomButton
              activeColor={"violet-600"}
              activeTextColor={"white"}
              color={"violet-50"}
              hoverColor={"violet-500"}
              hoverTextColor={"white"}
              label={
                modalType === "editComments"
                  ? "Save Comments"
                  : modalType === "viewComments"
                  ? "Close Modal"
                  : modalType === "addComments"
                  ? "Add Comments"
                  : "Close"
              }
              onClick={onClick}
              textColor={"violet-500"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
