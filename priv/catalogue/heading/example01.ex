defmodule Lotus.Catalogue.Heading.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Heading,
    catalogue: Lotus.Catalogue,
    title: "Heading",
    height: "800px",
    direction: "horizontal",
    container: {:div, class: "uk-container"}

  def render(assigns) do
    ~F"""
    <Heading>Default Heading</Heading>
    <Heading level={2}>Default Heading 1</Heading>
    <Heading size="medium" level={1}>Small Heading 2</Heading>
    <Heading bullet size="large">Bullet</Heading>
    <Heading line size="xsmall">Line</Heading>
    <Heading divider size="small">Divider</Heading>
    """
  end
end
