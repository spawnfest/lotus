defmodule Lotus.Catalogue.Card.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Card,
    catalogue: Lotus.Catalogue,
    title: "Card",
    height: "400px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.{Block, CardTitle}

  def render(assigns) do
    ~F"""
    <Block grid>
        <Block width="1-2">
            <Card size="small" color="primary" body>
                <CardTitle>Small</CardTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Card>
        </Block>
        <Block  width="1-2">
            <Card size="large" color="default" body>
                <CardTitle>Large</CardTitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Card>
        </Block>
    </Block>
    """
  end
end
