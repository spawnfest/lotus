defmodule Lotus.Catalogue.Tile.Example02 do
  use Surface.Catalogue.Example,
    subject: Lotus.Tile,
    catalogue: Lotus.Catalogue,
    title: "Tile (Padding)",
    height: "300px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <div class="uk-grid uk-child-width-1-3@s uk-grid-small uk-text-center" uk-grid>
      <div>
          <Tile color="muted" class="uk-padding-remove">
              <p class="uk-h4">Remove</p>
          </Tile>
      </div>
      <div>
          <Tile color="primary" padding="small">
              <p class="uk-h4">Small</p>
          </Tile>
      </div>
      <div>
          <Tile color="secondary" padding="large">
              <p class="uk-h4">Large</p>
          </Tile>
      </div>
    </div>
    """
  end
end
