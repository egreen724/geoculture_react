class Api::ArtworksController < ApplicationController

  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end

  def create
    @artwork = Artwork.new(artwork_params)

    if @artwork.save
      render json: @artwork, status: :created
    else
      render json: @artwork.errors, status: :unprocessable_entity
    end
  end

  def index
      @artworks = Artwork.all

      render json: @artworks
    end

  # def update
  #     if @list.update(list_params)
  #       render json: @list
  #     else
  #       render json: @list.errors, status: :unprocessable_entity
  #     end
  #   end
  #
  #   # DELETE /lists/1
  #   def destroy
  #     @list.destroy
  #     if @list.destroy
  #       head :no_content, status: :ok
  #     else
  #       render json: @list.errors, status: :unprocessable_entity
  #     end
  #   end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist, :medium, :year, :collecting_institution, :location, :image_url, :thumbnail_url, :favorite)
  end



end
