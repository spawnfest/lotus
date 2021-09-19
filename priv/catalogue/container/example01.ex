defmodule Lotus.Catalogue.Container.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Container,
    catalogue: Lotus.Catalogue,
    title: "Container",
    height: "90px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Container size="small">
      <div class="uk-card uk-text-center">
        This is a Container
      </div>
    </Container>
    """
  end
end
