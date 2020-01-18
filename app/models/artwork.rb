class Artwork < ApplicationRecord
  validates :slug, uniqueness: true

end
