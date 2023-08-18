import { BaseBoxShapeTool, StateNode, TLPointerEvent } from "@tldraw/tldraw";

// Extending the base box shape tool gives us a lot of functionality for free.
export class BlockShapeTool extends BaseBoxShapeTool {
  static override id = "block";
  static override initial = "idle";

  override shapeType = { type: "block" };
  override onPointerDown?: TLPointerEvent | undefined = (info) => {
    // const { app } = this;
    console.log(this);
    //     const pageSpacePoint = app.screenToPage(info.point.x, info.point.y);
    //     const shapesAtPoint = app.getShapesAtPoint(pageSpacePoint);
    //     const highestShape = shapesAtPoint[shapesAtPoint.length - 1];

    //     const stampId = app.createShapeId();
    //     app.createShapes([
    //       {
    //         id: stampId,
    //         type: "block",
    //         x: pageSpacePoint.x - 500 / 2,
    //         y: pageSpacePoint.y - 100 / 2,
    //         props: {
    //           opacity: "1",
    //         },
    //       },
    //     ]);

    //     app.reparentShapes([stampId], highestShape?.id ?? null);
  };
}

// Tool
// ----
// export class BlockShapeTool extends StateNode {
//   static id = "block";
//   static initial = "idle";
//   override shapeType = "block";

//   override onPointerDown?: TLPointerEvent | undefined = (info) => {
//     const { app } = this;
//     const pageSpacePoint = app.screenToPage(info.point.x, info.point.y);
//     const shapesAtPoint = app.getShapesAtPoint(pageSpacePoint);
//     const highestShape = shapesAtPoint[shapesAtPoint.length - 1];

//     const stampId = app.createShapeId();
//     app.createShapes([
//       {
//         id: stampId,
//         type: "block",
//         x: pageSpacePoint.x - 500 / 2,
//         y: pageSpacePoint.y - 100 / 2,
//         props: {
//           opacity: "1",
//         },
//       },
//     ]);

//     app.reparentShapes([stampId], highestShape?.id ?? null);
//   };
// }
