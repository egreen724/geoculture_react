class Api::ArtworksController < ApplicationController

  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end

  # def create
  #   @artwork = Artwork.new(artwork_params)
  #
  #   if @artwork.save
  #     render json: @artwork, status: :created
  #   else
  #     render json: @artwork.errors, status: :unprocessable_entity
  #   end
  # end

  def index
    @artworks = Artwork.all
    render json: @artworks
  end

  def update
    @artwork = Artwork.find(params[:id])

      if @artwork.update(artwork_params)
        render json: @artwork
      else
        render json: @artwork.errors, status: :unprocessable_entity
      end


    end
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

  def artsy
    resp = Faraday.get'https://api.artsy.net/api/artworks?size=10%0A' do |req|
      req.headers['X-Access-Token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NDdjZDQxNDcyNjE2OTc4ZmE2YjExMDAiLCJzYWx0X2hhc2giOiJjOGZkMGM3OWNiMzU5MWE1NTJmMDA0ZmZmZTJjYmVmNyIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzYzNTUyNzYxLCJpYXQiOjE1NzQ1NDc5NjEsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZGQ5YjFmOTc1MmI5ZTAwMTEwODI4N2UifQ.1aeR1Dmeum1ZVQqaHI5tcsrk1mbjINzrpuWgPGY1Zco'
    end
    resp_body = JSON.parse(resp.body)

    art_hash = resp_body["_embedded"]['artworks']

    art_hash.each do |artwork, index|

      if artwork["collecting_institution"].include? ","
        museum = artwork["collecting_institution"].split(',')[0]
        city = artwork["collecting_institution"].split(',')[1].strip
      else
        city = "Unknown"
      end

      Artwork.create(
        title: artwork["title"],
        medium: artwork["medium"],
        year: artwork["date"],
        collecting_institution: museum,
        location: city,
        image_url: artwork["_links"]["image"]["href"],
        thumbnail_url: artwork["_links"]["thumbnail"]["href"],
        slug: artwork["id"],
        artsy_id: artwork["slug"]
      )

    end
  end

  # componentDidMount() {
  #   fetch('https://api.artsy.net/api/artworks?size=10%0A', {
  #     'method': 'GET',
  #     'headers': {
  #       'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NDdjZDQxNDcyNjE2OTc4ZmE2YjExMDAiLCJzYWx0X2hhc2giOiJjOGZkMGM3OWNiMzU5MWE1NTJmMDA0ZmZmZTJjYmVmNyIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzYzNTUyNzYxLCJpYXQiOjE1NzQ1NDc5NjEsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZGQ5YjFmOTc1MmI5ZTAwMTEwODI4N2UifQ.1aeR1Dmeum1ZVQqaHI5tcsrk1mbjINzrpuWgPGY1Zco'
  #     } })
  #     .then(response => response.json())
  #     .then(data => {
  #       artworks = data._embedded.artworks
  #       this.setState({
  #         artworks: artworks
  #       })
  #     })
  #
  #   }

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist, :medium, :year, :collecting_institution, :location, :image_url, :thumbnail_url, :favorite)
  end

end
