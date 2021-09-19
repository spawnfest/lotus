defmodule Lotus.Catalogue.List.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.List,
    catalogue: Lotus.Catalogue,
    title: "List",
    height: "250px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <div class="uk-grid uk-child-width-expand@s">
      <div>
          <List marker="disc" color="primary">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </List>
      </div>

      <div>
          <List marker="circle" color="secondary" size="collapse">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </List>
      </div>

      <div>
          <List marker="square" color="muted" size="large">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </List>
      </div>

      <div>
          <List marker="decimal" color="emphasis" divider>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </List>
      </div>

      <div>
          <List marker="hyphen" striped>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
          </List>
      </div>
    </div>
    """
  end
end
