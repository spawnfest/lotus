defmodule Lotus.Catalogue.Tile.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Tile,
    catalogue: Lotus.Catalogue,
    title: "Tile",
    height: "400px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <div class="uk-grid uk-child-width-1-2@s uk-grid-collapse uk-text-center">
      <div>
          <Tile color="default">
              <p class="uk-h4">Default</p>
          </Tile>
      </div>
      <div>
          <Tile color="muted">
              <p class="uk-h4">Muted</p>
          </Tile>
      </div>
      <div>
          <Tile color="primary">
              <p class="uk-h4">Primary</p>
          </Tile>
      </div>
      <div>
          <Tile color="secondary">
              <p class="uk-h4">Secondary</p>
          </Tile>
      </div>
    </div>
    """
  end
end
