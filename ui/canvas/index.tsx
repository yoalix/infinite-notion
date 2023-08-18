"use client";

import {
  TLUiMenuGroup,
  Tldraw,
  defineShape,
  menuItem,
  toolbarItem,
} from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { BlockShapeUtil } from "./blockShapeUtil";
import { BlockShapeTool } from "./blockShapeTool";
// import "@tldraw/tldraw/ui.css";

const BlockShape = defineShape("block", { util: BlockShapeUtil });
const MyShapes = [BlockShape];

export default function Canvas() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        tools={[BlockShapeTool]}
        shapes={MyShapes}
        onMount={(editor) => {
          editor.createShapes([{ id: "shape:block", type: "block" }]);
        }}
        overrides={{
          // In order for our custom tool to show up in the UI...
          // We need to add it to the tools list. This "toolItem"
          // has information about its icon, label, keyboard shortcut,
          // and what to do when it's selected.
          tools(editor, tools) {
            tools.block = {
              id: "block",
              icon: "color",
              label: "block" as any,
              kbd: "b",
              readonlyOk: false,
              onSelect: () => {
                editor.setSelectedTool("block");
              },
            };
            return tools;
          },
          toolbar(_app, toolbar, { tools }) {
            // The toolbar is an array of items. We can add it to the
            // end of the array or splice it in, then return the array.
            toolbar.splice(4, 0, toolbarItem(tools.block));
            return toolbar;
          },
          keyboardShortcutsMenu(_app, keyboardShortcutsMenu, { tools }) {
            // Same for the keyboard shortcuts menu, but this menu contains
            // both items and groups. We want to find the "Tools" group and
            // add it to that before returning the array.
            const toolsGroup = keyboardShortcutsMenu.find(
              (group) => group.id === "shortcuts-dialog.tools",
            ) as TLUiMenuGroup;
            toolsGroup.children.push(menuItem(tools.block));
            return keyboardShortcutsMenu;
          },
        }}
      />
    </div>
  );
}
