defmodule Lotus.Catalogue.Tile.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Tile,
    catalogue: Lotus.Catalogue,
    title: "Tile",
    height: "600px",
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
    <hr />
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
