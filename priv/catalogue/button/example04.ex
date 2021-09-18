defmodule Lotus.Catalogue.Button.Example04 do
  use Surface.Catalogue.Example,
    subject: Lotus.Button,
    catalogue: Lotus.Catalogue,
    title: "Button (Width)",
    height: "500px",
    direction: "vertical",
    container: {:div, class: "uk-container-center"}

  def render(assigns) do
    ~F"""
    <Button width="1-1" kind="primary">Fullwidth Button</Button>
    <hr />
    <Button width="1-2" kind="secondary">1/3 Button</Button>
    <hr />
    <Button width="1-3" kind="danger">1/3 Button</Button>
    <hr />
    <Button width="1-4" kind="default">1/3 Button</Button>
    <hr />
    <Button width="1-5">1/3 Button</Button>
    """
  end
end
