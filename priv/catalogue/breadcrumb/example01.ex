defmodule Lotus.Catalogue.Breadcrumb.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Breadcrumb,
    catalogue: Lotus.Catalogue,
    title: "Breadcrumb",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Breadcrumb>
      <li><a href="#">Home</a></li>
      <li><a href="#">Linked Category</a></li>
      <li class="uk-disabled"><a>Disabled Category</a></li>
      <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
    </Breadcrumb>
    """
  end
end
