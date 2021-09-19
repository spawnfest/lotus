defmodule Lotus.Catalogue.CardBody.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.CardBody,
    catalogue: Lotus.Catalogue,
    title: "CardBody",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <CardBody>Default</CardBody>
    """
  end
end
