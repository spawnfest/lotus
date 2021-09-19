defmodule Lotus.Catalogue.Accordion.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Accordion,
    catalogue: Lotus.Catalogue,
    title: "Accordion",
    height: "300px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.AccordionItem

  def render(assigns) do
    ~F"""
    <Accordion id="accordion">
      <AccordionItem title="Section 1">
        Lorem Ipsum
      </AccordionItem>
      <AccordionItem title="Section 2">
        Lorem Ipsum
      </AccordionItem>
      <AccordionItem open title="Section 3">
        Lorem Ipsum
      </AccordionItem>
      <AccordionItem title="Section 4">
        Lorem Ipsum
      </AccordionItem>
    </Accordion>
    """
  end
end
