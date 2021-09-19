defmodule Lotus.Catalogue.Label.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Label,
    catalogue: Lotus.Catalogue,
    title: "Label",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Label>Default</Label>
    <Label color="success">Success</Label>
    <Label color="warning">Warning</Label>
    <Label color="danger">Danger</Label>
    """
  end
end
