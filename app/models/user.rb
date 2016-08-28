class User < ActiveRecord::Base
  attr_accessor :password, :password_confirmation
  has_many :appointments
  before_save :encrypt_password

  has_attached_file :avatar, styles: { small: "64x64", med: "100x100", large: "200x200" }

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :email
  validates_uniqueness_of :email
  validates_attachment :avatar, :content_type => { :content_type => "image/jpg" }


  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end

  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
end
