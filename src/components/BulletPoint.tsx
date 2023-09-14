const BulletPoint = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center gap-4">
      <img src="src/assets/icon-list.svg" />
      <div>{content}</div>
    </div>
  );
};

export default BulletPoint;
