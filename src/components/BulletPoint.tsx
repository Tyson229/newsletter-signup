import bulletPointLogo from '../assets/icon-list.svg'

const BulletPoint = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={bulletPointLogo} />
      <div>{content}</div>
    </div>
  );
};

export default BulletPoint;
