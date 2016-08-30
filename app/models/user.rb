class User < ActiveRecord::Base
  attr_accessor :password, :password_confirmation
  EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  has_many :services
  has_many :invoices
  has_many :reviews
  has_many :details
  before_save :encrypt_password

  has_attached_file :avatar, styles: { small: "64x64", med: "100x100", large: "200x200" }

  validates :password,
    :presence => true,
    :confirmation => true,
    :on => :create,
    :length => {
      :minimum   => 8,
      :maximum   => 20,
    },
    :unless => :secure_password

  validates :scope,
    :presence => true

  validates :email,
    :uniqueness => true,
    :presence => true,
    :on => :create,
    :unless => :valid_email
  #avatar attachment
  validates_attachment :avatar, :content_type => { :content_type => "image/jpg" }

  def secure_password
    if (password =~ /[a-z]/).blank? || (password =~ /[A-Z]/).blank? #lower letter test || upper letter test
      return false
    else
      return true
    end
      # return false if (password =~ /[0-9]/).blank? #number test
  end

  def valid_email
    if (email =~ /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/i).blank?
      return true
    else
      return false
    end
  end

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
