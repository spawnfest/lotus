defmodule Lotus.Catalogue.DescriptionList.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.DescriptionList,
    catalogue: Lotus.Catalogue,
    title: "Description List",
    height: "400px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <DescriptionList divider>
      <dt>Term 1</dt>
      <dd>Explanation of whatever Term 1 is</dd>
      <dt>Term 2</dt>
      <dd>Explanation of whatever Term 2 is</dd>
      <dt>Term 3</dt>
      <dd>Explanation of whatever Term 3 is</dd>
      <dt>Term 4</dt>
      <dd>Explanation of whatever Term 4 is</dd>
    </DescriptionList>
    """
  end
end
