import {
  BlogPostDocument,
  ProjectDocument,
  ServiceDocument,
  TestimonialDocument,
} from "prismicio-types"

import { About } from "@/app/_components/About"
import { BlogPosts } from "@/app/_components/BlogPosts"
import { Contact } from "@/app/_components/Contact"
import { Hero } from "@/app/_components/Hero"
import { Projects } from "@/app/_components/Projects"
import { Services } from "@/app/_components/Services"
import { Skills } from "@/app/_components/Skills"
import { Testimonials } from "@/app/_components/Testimonials"
import { createClient } from "@/lib/prismicio"
import { isNonNullable } from "@/utils"
import { parseDocumentFromRelationshipField } from "@/utils/prismic"

const Page = async () => {
  const prismic = createClient()

  const home = await prismic.getSingle("home").catch(() => null)

  console.log({ home })

  const services = home?.data.services
    .map((item) =>
      parseDocumentFromRelationshipField<ServiceDocument, typeof item.service>(
        item.service,
      ),
    )
    .filter(isNonNullable)

  const projects = home?.data.projects
    .map((item) =>
      parseDocumentFromRelationshipField<ProjectDocument, typeof item.project>(
        item.project,
      ),
    )
    .filter(isNonNullable)

  const testimonials = home?.data.testimonials
    .map((item) =>
      parseDocumentFromRelationshipField<
        TestimonialDocument,
        typeof item.testimonial
      >(item.testimonial),
    )
    .filter(isNonNullable)

  const blogPosts = home?.data.blog_posts
    .map((item) =>
      parseDocumentFromRelationshipField<
        BlogPostDocument,
        typeof item.blog_post
      >(item.blog_post),
    )
    .filter(isNonNullable)

  return (
    <div>
      <Hero
        className="m-auto w-full max-w-5xl px-2 py-8 sm:py-16 md:px-4 md:py-24 lg:px-20"
        greeting={home?.data.greeting}
        title={home?.data.job_title}
        description={home?.data.description}
        photo={home?.data.photo}
      />

      {/* About */}
      {home?.data.about_enabled ? (
        <div className="bg-mist-50">
          <About
            className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
            title={home?.data.about_title}
            description={home?.data.about_blurb}
          />
        </div>
      ) : null}

      {/* Skills */}
      {home?.data.skills_enabled ? (
        <Skills
          className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
          title={home?.data.skills_title}
          description={home?.data.skills_blurb}
          skills={home?.data.skills}
        />
      ) : null}

      {/* Projects */}
      {home?.data.projects_enabled ? (
        <Projects
          className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
          title={home?.data.projects_title}
          description={home?.data.projects_blurb}
          projects={projects}
        />
      ) : null}

      {/* Services */}
      {home?.data.services_enabled ? (
        <div className="bg-mist-50">
          <Services
            className="m-auto w-full max-w-7xl px-2 py-16 md:px-4 lg:px-20"
            title={home?.data.services_title}
            description={home?.data.services_blurb}
            services={services}
            isContactEnabled={home?.data.contact_enabled}
          />
        </div>
      ) : null}

      {/* Testimonials */}
      {home?.data.testimonials_enabled ? (
        <div className="bg-mist-50">
          <Testimonials
            className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
            title={home?.data.testimonials_title}
            description={home?.data.testimonials_blurb}
            testimonials={testimonials}
          />
        </div>
      ) : null}

      {/* Blog */}
      {home?.data.blog_enabled ? (
        <BlogPosts
          className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
          title={home?.data.blog_title}
          description={home?.data.blog_blurb}
          blogPosts={blogPosts}
        />
      ) : null}

      {/* Contact Form */}
      {home?.data.contact_enabled ? (
        <div className="bg-mist-50">
          <Contact
            className="m-auto w-full max-w-5xl px-2 py-16 md:px-4 lg:px-20"
            title={home?.data.contact_title}
            description={home?.data.contact_blurb}
          />
        </div>
      ) : null}
    </div>
  )
}

/**
 * what you do
 * how long youve been doing it
 * are you taking clients
 * how to contact you
 * examples of work
 * whats your vibe?
 *
 *
 */

export default Page
