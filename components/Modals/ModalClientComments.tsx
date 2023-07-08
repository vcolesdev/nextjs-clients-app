import React from "react";
import { Controller } from "react-hook-form";
import { Modal } from "rsuite";
import { CustomButton } from "@/components/Controls/Custom/CustomButton";
import { CustomEditor } from "@/components/Controls/Custom/CustomEditor";

export function ModalClientComments({
  client,
  control,
  isOpen,
  modalHeadingText,
  modalType,
  onClose,
  onClick,
  size
}: {
  client?: {} | any;
  control?: any;
  isOpen: boolean;
  modalHeadingText?: string;
  modalType: "addComments" | "editComments" | "viewComments";
  onClick?: () => void;
  onClose: () => void;
  size?: "full" | "lg" | "md" | "sm" | "xs";
}) {
  return (
    <>
      <Modal open={isOpen} onClose={onClose} size={size ? size : "md"}>
        <Modal.Header className="tracking-tight">
          {modalHeadingText ? modalHeadingText : "Client Comments"}
        </Modal.Header>
        <Modal.Body>
          <div className={"mb-4"}>
            {modalType === "editComments" ? (
              <>
                <div id="EditClientComments">
                  <Controller
                    control={control}
                    name="comments"
                    render={({ field }) => (
                      <CustomEditor
                        editorClasses="p-4 text-sm text-gray-600"
                        editorState={field.value}
                        onChange={field.onChange}
                        value={field.value}
                        wrapperClasses="border border-gray-300"
                      />
                    )}
                  />
                </div>
              </>
            ) : modalType === "viewComments" ? (
              <div id="ViewClientComments">
                <div dangerouslySetInnerHTML={{ __html: client?.comments }} />
              </div>
            ) : modalType === "addComments" ? (
              <div id="AddClientComments">
                <Controller
                  control={control}
                  name="comments"
                  render={({ field }) => (
                    <CustomEditor
                      editorClasses="p-4 text-sm text-gray-600"
                      editorState={field.value}
                      onChange={field.onChange}
                      value={field.value}
                      wrapperClasses="border border-gray-300"
                    />
                  )}
                />
              </div>
            ) : (
              <div className="text-sm text-gray-700 tracking-tight">
                Modal content here...
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton
            activeColor="violet-600"
            activeTextColor="white"
            color="violet-50"
            hoverColor="violet-500"
            hoverTextColor="white"
            label={
              modalType === "editComments"
                ? "Save Comments"
                : modalType === "viewComments"
                ? "Close Modals"
                : modalType === "addComments"
                ? "Add Comments"
                : "Close"
            }
            onClick={onClick}
            textColor="violet-500"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}
