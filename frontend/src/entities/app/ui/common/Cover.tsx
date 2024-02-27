type CoverProps = {
  gameID: string;
  type: 'big' | 'wide' | 'compact';
};

const Cover = ({ gameID, type }: CoverProps) => {
  switch (type) {
    case 'big':
      return (
        <img
          className="gamecard_cover"
          width={766}
          height={458}
          src={
            'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_616x353.jpg'
          }
        />
      );
    case 'wide':
      return (
        <img
          className="gamecard_cover"
          height={87}
          width={231}
          src={
            'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_231x87.jpg'
          }
        />
      );
    case 'compact':
      return (
        <img
          className="gamecard_cover"
          height={197}
          width={379}
          src={
            'https://cdn.cloudflare.steamstatic.com/steam/apps/' + gameID + '/capsule_616x353.jpg'
          }
        />
      );
  }
};

export default Cover;
