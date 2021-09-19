defmodule Lotus.Catalogue.Card.Example02 do
  use Surface.Catalogue.Example,
    subject: Lotus.Card,
    catalogue: Lotus.Catalogue,
    title: "Card (Header and Footer)",
    height: "500px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  alias Lotus.{Block, CardHeader, CardBody, CardTitle, CardFooter}

  def render(assigns) do
    ~F"""
    <Card color="default">
        <CardHeader>
            <Block grid grid_size="small">
                <Block width="auto">
                  <img class="uk-border-circle" width="40" height="40" src="https://via.placeholder.com/64">
                </Block>
                <Block width="expand">
                    <CardTitle class="uk-margin-remove-bottom">Title</CardTitle>
                    <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                </Block>
            </Block>
        </CardHeader>
        <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </CardBody>
        <CardFooter>
            <a href="#" class="uk-button uk-button-text">Read more</a>
        </CardFooter>
    </Card>
    """
  end
end
