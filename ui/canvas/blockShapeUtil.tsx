import { ShapeUtil, HTMLContainer, Box2d } from "@tldraw/tldraw";
import { TLBaseShape } from "@tldraw/tldraw";
import Editor from "../editor";

type BlockShape = TLBaseShape<"block", { w: number; h: number }>;

export class BlockShapeUtil extends ShapeUtil<BlockShape> {
  static type = "block" as const;
  canEdit = () => false;

  getDefaultProps(): BlockShape["props"] {
    return {
      w: 500,
      h: 40,
    };
  }

  getBounds(shape: BlockShape) {
    return new Box2d(0, 0, shape.props.w, shape.props.h);
  }

  component(shape: BlockShape) {
    return (
      <HTMLContainer style={{ pointerEvents: "all" }}>
        <div className="w-500 h-10 bg-slate-300"></div>
        <Editor />
      </HTMLContainer>
    );
  }
  override onClick(shape: BlockShape) {
    console.log("click");
  }

  indicator(shape: BlockShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }
  //   onClick(shape: BlockShape) {
  //     console.log("click");
  //   }
}
