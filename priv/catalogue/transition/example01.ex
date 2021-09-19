defmodule Lotus.Catalogue.Transition.Example01 do
  use Surface.Catalogue.Example,
    subject: Lotus.Transition,
    catalogue: Lotus.Catalogue,
    title: "Transition",
    height: "400px",
    direction: "vertical",
    container: {:div, class: "uk-container"}

  alias Lotus.{Block, Transition}

  def render(assigns) do
    ~F"""
    <Block grid>
        <Block text_align="center">
            <Transition class="uk-inline-clip" tabindex="0">
                <img src="https://via.placeholder.com/250" alt="">
                <Block transition="fade" class="uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                    <p class="uk-h4 uk-margin-remove">Fade</p>
                </Block>
            </Transition>
            <p class="uk-margin-small-top">Fade</p>
        </Block>
        <Block text_align="center">
            <Transition class="uk-inline-clip" tabindex="0">
                <img src="https://via.placeholder.com/250" alt="">
                <Block transition="fade" class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                    <p class="uk-h4 uk-margin-remove">Bottom</p>
                </Block>
            </Transition>
            <p class="uk-margin-small-top">Bottom</p>
        </Block>
    </Block>
    """
  end
end
