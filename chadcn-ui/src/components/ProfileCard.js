// src/components/ProfileCard.js
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl max-w-sm mx-auto">
      {/* Avatar */}
      <Avatar.Root className="w-24 h-24 rounded-full mb-4 overflow-hidden border-2 border-gray-300">
        <Avatar.Image
          className="rounded-full w-full h-full"
          src="https://i.ibb.co/3kQhKBK/unnamed.jpg"
          alt="User Avatar"
        />
        <Avatar.Fallback className="flex items-center justify-center w-full h-full bg-gray-400 text-white">
          SS
        </Avatar.Fallback>
      </Avatar.Root>

      <h2 className="text-xl font-semibold">Sujit Singh</h2>
      <p className="text-gray-500 mb-4">Full Stack Developer</p>

      {/* Tooltip + Dialog */}
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
                  View Profile
                </button>
              </Dialog.Trigger>

              {/* Dialog Box */}
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white shadow-xl rounded-lg max-w-sm">
                  <Dialog.Title className="text-lg font-bold mb-2">
                    About Sujit Singh
                  </Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-600 mb-4">
                    I am a passionate Full Stack Developer specialized in MERN stack. I love creating scalable and maintainable web applications.
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button className="mt-4 bg-red-500 text-white py-1 px-3 rounded">
                      Close
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </Tooltip.Trigger>

          {/* Tooltip Content */}
          <Tooltip.Portal>
            <Tooltip.Content className="bg-gray-900 text-white px-2 py-1 rounded shadow-lg">
              Click to see profile details
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default ProfileCard;
