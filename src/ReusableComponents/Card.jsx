import SharedComponent from "../SharedComponent";

export default function Card({
  name,
  price,
  buttonText,
  imageUrl,
  onButtonClick,
}) {
  return (
    <SharedComponent.Card sx={{ width: 350 }}>
      <SharedComponent.CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ width: "300px", height: "350px", objectFit: "cover" }} src={imageUrl} alt="" />
        <SharedComponent.Typography variant="h5" component="div">
          {name}
        </SharedComponent.Typography>
        <SharedComponent.Typography variant="h6">
          Rs. {price}
        </SharedComponent.Typography>
        <SharedComponent.CardActions>
          <SharedComponent.Button size="small" onClick={onButtonClick}>
            {buttonText}
          </SharedComponent.Button>
        </SharedComponent.CardActions>
      </SharedComponent.CardContent>
    </SharedComponent.Card>
  );
}
